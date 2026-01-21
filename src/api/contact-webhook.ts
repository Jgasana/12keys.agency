export interface ContactWebhookPayload {
  name: string;
  email: string;
  phone: string;
  message: string;
  serviceName: string;
  subject: string;
  timestamp?: string;
}

const WEBHOOK_URL = 'https://12keys-agency-n8n.go13ce.easypanel.host/webhook/aaed8b10-6338-4a55-bc2f-96dd2e3d1e40';

export async function sendToWebhook(data: ContactWebhookPayload): Promise<void> {
  const payload = {
    ...data,
    timestamp: new Date().toISOString(),
  };

  console.log('Sending to webhook URL:', WEBHOOK_URL);
  console.log('Webhook payload:', payload);

  try {
    const response = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
      mode: 'cors',
      credentials: 'omit',
    });

    console.log('Webhook response status:', response.status);
    console.log('Webhook response headers:', response.headers);

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Webhook error response:', errorText);
      throw new Error(`Webhook request failed with status: ${response.status}. Response: ${errorText}`);
    }

    const responseData = await response.json().catch(() => ({}));
    console.log('Webhook sent successfully. Response:', responseData);
  } catch (error) {
    console.error('Error sending to webhook:', error);
    throw error;
  }
}
