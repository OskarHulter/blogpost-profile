declare namespace NodeJS {
	export interface ProcessEnv extends Dict<string> {
	  DATABASE_URL?: string;
	  NEXT_PUBLIC_HYPERTUNE_TOKEN: string;
	  HYPERTUNE_FRAMEWORK?: string;
	  HYPERTUNE_OUTPUT_DIRECTORY_PATH?: string;
	  HYPERTUNE_INCLUDE_INIT_DATA?: string;
	}
}
