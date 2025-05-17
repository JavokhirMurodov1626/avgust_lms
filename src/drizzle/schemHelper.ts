import { timestamp, text } from "drizzle-orm/pg-core";

export const id = text("id")
  .primaryKey()
  .$defaultFn(() => crypto.randomUUID());

export const created_at = timestamp({ withTimezone: true })
  .notNull()
  .defaultNow();

export const updated_at = timestamp({ withTimezone: true })
  .notNull()
  .defaultNow()
  .$onUpdate(() => new Date());
