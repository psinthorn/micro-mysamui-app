CREATE TYPE "public"."status" AS ENUM('draft', 'open', 'pending', 'sent', 'overdue', 'paid', 'void');--> statement-breakpoint
CREATE TABLE "invoices" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" text NOT NULL,
	"email" text NOT NULL,
	"amonut" integer NOT NULL,
	"description" text NOT NULL,
	"status" "status" NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
