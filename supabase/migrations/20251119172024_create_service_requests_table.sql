/*
  # Create Service Requests System

  1. New Tables
    - `service_requests`
      - `id` (uuid, primary key) - Unique identifier for each request
      - `name` (text) - Name of the person requesting the service
      - `email` (text) - Email address for contact
      - `phone` (text) - Phone number for contact
      - `service_type` (text) - Type of service requested (lawn care, landscaping, snow removal, maintenance)
      - `message` (text) - Additional details about the request
      - `status` (text) - Current status (pending, in_progress, completed, cancelled)
      - `created_at` (timestamptz) - Timestamp when request was created
      - `updated_at` (timestamptz) - Timestamp when request was last updated
      - `user_id` (uuid, nullable) - Reference to authenticated user if applicable
    
    - `staff_users`
      - `id` (uuid, primary key) - Links to auth.users
      - `email` (text) - Staff email
      - `full_name` (text) - Staff member's full name
      - `role` (text) - Staff role (admin, staff)
      - `created_at` (timestamptz) - When staff account was created
  
  2. Security
    - Enable RLS on both tables
    - Public can insert service requests (for contact form)
    - Only authenticated staff can view and manage requests
    - Staff can only read their own profile data
    - Only admins can manage staff accounts
  
  3. Indexes
    - Index on service_requests.status for filtering
    - Index on service_requests.created_at for sorting
    - Index on service_requests.email for lookups
*/

-- Create service_requests table
CREATE TABLE IF NOT EXISTS service_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  service_type text NOT NULL,
  message text DEFAULT '',
  status text DEFAULT 'pending' NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  user_id uuid REFERENCES auth.users(id) ON DELETE SET NULL
);

-- Create staff_users table
CREATE TABLE IF NOT EXISTS staff_users (
  id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email text UNIQUE NOT NULL,
  full_name text NOT NULL,
  role text DEFAULT 'staff' NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Create indexes
CREATE INDEX IF NOT EXISTS idx_service_requests_status ON service_requests(status);
CREATE INDEX IF NOT EXISTS idx_service_requests_created_at ON service_requests(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_service_requests_email ON service_requests(email);

-- Enable RLS
ALTER TABLE service_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE staff_users ENABLE ROW LEVEL SECURITY;

-- Service Requests Policies

-- Allow anyone to insert service requests (public contact form)
CREATE POLICY "Anyone can submit service requests"
  ON service_requests
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Only authenticated staff can view all service requests
CREATE POLICY "Staff can view all service requests"
  ON service_requests
  FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM staff_users
      WHERE staff_users.id = auth.uid()
    )
  );

-- Only authenticated staff can update service requests
CREATE POLICY "Staff can update service requests"
  ON service_requests
  FOR UPDATE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM staff_users
      WHERE staff_users.id = auth.uid()
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM staff_users
      WHERE staff_users.id = auth.uid()
    )
  );

-- Only authenticated staff can delete service requests
CREATE POLICY "Staff can delete service requests"
  ON service_requests
  FOR DELETE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM staff_users
      WHERE staff_users.id = auth.uid()
    )
  );

-- Staff Users Policies

-- Staff can view their own profile
CREATE POLICY "Staff can view own profile"
  ON staff_users
  FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

-- Only admins can insert new staff
CREATE POLICY "Admins can create staff accounts"
  ON staff_users
  FOR INSERT
  TO authenticated
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM staff_users
      WHERE staff_users.id = auth.uid()
      AND staff_users.role = 'admin'
    )
  );

-- Only admins can update staff
CREATE POLICY "Admins can update staff accounts"
  ON staff_users
  FOR UPDATE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM staff_users
      WHERE staff_users.id = auth.uid()
      AND staff_users.role = 'admin'
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM staff_users
      WHERE staff_users.id = auth.uid()
      AND staff_users.role = 'admin'
    )
  );

-- Create a function to automatically update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for service_requests
CREATE TRIGGER update_service_requests_updated_at
  BEFORE UPDATE ON service_requests
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();