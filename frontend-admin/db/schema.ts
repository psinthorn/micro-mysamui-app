import { integer, pgEnum, pgTable, serial, text, timestamp }  from 'drizzle-orm/pg-core'

export const statusEnum = pgEnum('status', ['draft', 'open', 'pending', 'sent', 'overdue', 'paid', 'void'])

export const Invoices = pgTable('invoices', {
    id:  serial('id').primaryKey().notNull(),
    userId:  text('user_id').notNull(),
    email: text('email').notNull(),
    amount:  integer('amonut').notNull(),
    description:  text('description').notNull(),
    status:  statusEnum('status').notNull(),
    createdAt:  timestamp('created_at').defaultNow().notNull(),
    updatedAt:  timestamp('updated_at').defaultNow().notNull(),
})