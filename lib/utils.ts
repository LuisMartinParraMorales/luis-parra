export function cn(...values: Array<string | false | null | undefined>) {
  return values.filter(Boolean).join(" ");
}

type GmailComposeOptions = {
  to: string;
  subject?: string;
  body?: string;
};

export function buildGmailComposeUrl({
  to,
  subject,
  body,
}: GmailComposeOptions) {
  const params = new URLSearchParams({
    view: "cm",
    fs: "1",
    to,
  });

  if (subject) {
    params.set("su", subject);
  }

  if (body) {
    params.set("body", body);
  }

  return `https://mail.google.com/mail/?${params.toString()}`;
}
