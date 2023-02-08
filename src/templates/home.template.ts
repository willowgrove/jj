import { html } from "sg";
import { marked } from "marked";
import { fetchJSON, fetchText } from "../fetch";
import cardTemplate from "./card.template";

const coverImageUrls: string[] = await fetchJSON("/cover-image-urls.json", []);
const alerts: { background: string; markdown: string }[] = await fetchJSON(
  "/alerts.json",
  []
).then((list) =>
  Promise.all(
    list?.map(async (d: any) => ({
      ...d,
      markdown: await fetchText(d.markdownUrl, ""),
    }))
  )
);
const businessHoursMd: string = await fetchText("/markdown/business-hours.md");
const contactUsMd: string = await fetchText("/markdown/contact-us.md");
const googleMapEmbedHtml: string = await fetchText("/google-map-embed.html");

export default html`
  <style>
    awesome-wrap::part(inner) {
      display: flex;
      flex-wrap: wrap;
    }
  </style>

  <awesome-wrap style="flex: auto; text-align: center">
    <sg-button
      @click=${() => alert("It won't work for now xD")}
      style="flex: 1; background: hsl(0, 0%, 30%); color: hsl(0, 0%, 100%); padding: 0.8em;"
      >CHECK OUR MENU</sg-button
    >
    <sg-carousel style="max-height: 100vh; min-height: 500px; height: auto;"
      >${coverImageUrls?.map((url) => html`<img src=${url} />`)}</sg-carousel
    >
    ${alerts?.map(
      (alert) =>
        html`<sg-alert style=${`background: ${alert.background ?? '""'}`}>
          <div style="flex: 1" .innerHTML=${marked.parse(alert.markdown)}></div
        ></sg-alert>`
    )}
    <awesome-flex>
      <awesome-flex-item xs="12" lg="4" style="height: auto">
        ${cardTemplate("Business Hours", marked.parse(businessHoursMd))}
      </awesome-flex-item>
      <awesome-flex-item xs="12" lg="4" style="height: auto">
        ${cardTemplate("Contact Us", marked.parse(contactUsMd))}
      </awesome-flex-item>
      <awesome-flex-item xs="12" lg="4" style="height: auto">
        ${cardTemplate("Find Us on Google Map", googleMapEmbedHtml)}
      </awesome-flex-item>
    </awesome-flex>
  </awesome-wrap>
`;
