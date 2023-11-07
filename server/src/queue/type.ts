import { BotSource } from "@prisma/client";

export interface QSource extends BotSource {
  embedding: string;
  maxDepth?: number;
  maxLinks?: number;
  // pageContent: string;
  // metadata: Record<string, any>;
  // source: string;
  // loc: string;
}
