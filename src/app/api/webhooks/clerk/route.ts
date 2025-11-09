import type { NextRequest } from "next/server";
import { verifyWebhook } from "@clerk/nextjs/webhooks";
import { clerkClient } from "@clerk/nextjs/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  try {
    // Webhook mit Clerk's eingebauter Funktion verifizieren
    const evt = await verifyWebhook(req, {
      signingSecret: process.env.CLERK_WEBHOOK_SIGNING_SECRET!,
    });

    // Nur user.created verarbeiten
    if (evt.type !== "user.created") {
      return new Response("Event ignored", { status: 200 });
    }

    const userId = evt.data.id;
    const currentPublic = (evt.data as { public_metadata?: Record<string, unknown> })
      .public_metadata ?? {};

    // Rolle nur setzen, wenn noch nicht vorhanden (Idempotenz)
    if (!currentPublic?.roles) {
      const client = await clerkClient();
      await client.users.updateUser(userId, {
        publicMetadata: { 
          ...currentPublic, 
          roles: ["pd_mypd"] 
        },
      });
      
      console.log(`✅ Rolle pd_mypd erfolgreich für User ${userId} gesetzt`);
    } else {
      console.log(`ℹ️ User ${userId} hat bereits Rollen, überspringe`);
    }

    return new Response("OK", { status: 200 });
  } catch (err) {
    console.error("Webhook-Fehler:", err);
    const msg = (err as Error)?.message ?? "unknown";
    const status = /webhook|verify|signature|svix/i.test(msg) ? 400 : 500;
    return new Response(`Webhook error: ${msg}`, { status });
  }
}
