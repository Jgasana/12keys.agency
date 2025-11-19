export interface ContactWebhookPayload {
  name: string;
  email: string;
  phone: string;
  message: string;
  serviceName: string;
  timestamp?: string;
}

export async function sendToWebhook(data: ContactWebhookPayload): Promise<void> {
  const payload = {
    ...data,
    timestamp: new Date().toISOString(),
  };

  console.log('Webhook payload prepared:', payload);
}
