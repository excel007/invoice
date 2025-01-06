import { integer, pgTable, text, serial, timestamp, pgEnum, varchar } from "drizzle-orm/pg-core";

export const statusEnum = pgEnum('status',['open','paid','void','uncollectable'])

export const Invoices = pgTable("invoices", {
    id: serial('id').primaryKey(),
    createTs: timestamp('createTs').defaultNow().notNull(),
    value: integer('value').notNull(),
    description: text('description').notNull(),
    status: statusEnum('status').notNull(),
    name: varchar('name', { length: 255 }).notNull()
})