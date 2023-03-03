import { Response } from "express";

export type IMakeProcess = {
  cb: () => Promise<any>
  errorMessage?: string
  res?: Response | undefined
}