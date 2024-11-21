CREATE TABLE `@sln/blogpost-profile_comment` (
	`created_at` integer DEFAULT (unixepoch()) NOT NULL,
	`updated_at` integer,
	`deleted_at` integer,
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`title` text(256),
	`content` text(256),
	`relevancy` integer,
	`rating` integer,
	`post_id` integer,
	`owner_id` integer,
	FOREIGN KEY (`post_id`) REFERENCES `@sln/blogpost-profile_post`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`owner_id`) REFERENCES `@sln/blogpost-profile_user`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `@sln/blogpost-profile_post` (
	`created_at` integer DEFAULT (unixepoch()) NOT NULL,
	`updated_at` integer,
	`deleted_at` integer,
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`slug` text,
	`title` text(256) NOT NULL,
	`content` text(2048) NOT NULL,
	`owner_id` integer,
	`rating` integer,
	FOREIGN KEY (`owner_id`) REFERENCES `@sln/blogpost-profile_user`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE UNIQUE INDEX `slug_idx` ON `@sln/blogpost-profile_post` (`slug`);--> statement-breakpoint
CREATE INDEX `title_idx` ON `@sln/blogpost-profile_post` (`title`);--> statement-breakpoint
CREATE TABLE `@sln/blogpost-profile_user` (
	`created_at` integer DEFAULT (unixepoch()) NOT NULL,
	`updated_at` integer,
	`deleted_at` integer,
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`identifying_name` text(256),
	`display_name` text(256),
	`first_name` text,
	`last_name` text,
	`email` text NOT NULL,
	`invitee` integer,
	`role` text DEFAULT 'guest',
	FOREIGN KEY (`invitee`) REFERENCES `@sln/blogpost-profile_user`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE UNIQUE INDEX `email_idx` ON `@sln/blogpost-profile_user` (`email`);--> statement-breakpoint
CREATE UNIQUE INDEX `identifying_name_idx` ON `@sln/blogpost-profile_user` (`identifying_name`);--> statement-breakpoint
CREATE INDEX `display_name_idx` ON `@sln/blogpost-profile_user` (`display_name`);