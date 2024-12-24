import { pgEnum } from "drizzle-orm/pg-core";

export const statusEnum = pgEnum('status', ['draft', 'open', 'pending', 'sent', 'overdue', 'paid', 'void'])