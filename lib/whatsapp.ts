import { site } from "@/lib/content";
export type Enquiry={name:string;phone:string;email?:string;service?:string;date?:string;message?:string};
export function buildWhatsAppMessage(e:Enquiry):string{const lines:string[]=[`Hi ${site.name}! I'd like to enquire.`,"",`*Name:* ${e.name.trim()}`,`*Phone:* ${e.phone.trim()}`];if(e.email?.trim())lines.push(`*Email:* ${e.email.trim()}`);if(e.service?.trim())lines.push(`*Interested in:* ${e.service.trim()}`);if(e.date?.trim())lines.push(`*Preferred date/time:* ${e.date.trim()}`);if(e.message?.trim())lines.push("",`*Message:* ${e.message.trim()}`);lines.push("","_Sent from the website_");return lines.join("\n")}
export const whatsappUrl=(text:string)=>`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
