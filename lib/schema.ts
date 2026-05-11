import { z } from "zod";

export const WeatherSchema = z.enum(["sunny", "rainy", "cloudy"]);
export type Weather = z.infer<typeof WeatherSchema>;

export const GenerateRequestSchema = z.object({
  persona_id: z.enum(["sandwich", "cafe", "bunsik"]),
  yesterday: z.string().min(1).max(300),
  top_menu: z.string().min(1).max(150),
  reviews: z.tuple([
    z.string().min(1).max(500),
    z.string().min(1).max(500),
    z.string().min(1).max(500),
  ]),
  inventory: z.string().min(1).max(300),
  weather: WeatherSchema,
});
export type GenerateRequest = z.infer<typeof GenerateRequestSchema>;

export const CardOutputSchema = z.object({
  menu: z.object({
    title: z.string(),
    items: z
      .array(
        z.object({
          name: z.string(),
          reason: z.string(),
        }),
      )
      .min(1)
      .max(3),
  }),
  sns: z.object({
    naver: z.string().max(400),
    instagram: z.string().max(400),
  }),
  reviews: z
    .array(
      z.object({
        quote: z.string(),
        reply: z.string().max(300),
      }),
    )
    .length(3),
  coupon: z.object({
    headline: z.string(),
    body: z.string(),
    valid_until: z.string(),
  }),
  inventory_weather: z.object({
    weather_note: z.string(),
    inventory_note: z.string(),
  }),
});
export type CardOutput = z.infer<typeof CardOutputSchema>;
