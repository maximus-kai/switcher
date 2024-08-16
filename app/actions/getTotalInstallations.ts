"use server";
import { db } from "@/lib/db";

async function getTotalInstallations(): Promise<{
    total?: number;
    error?: string;
}>{
    try {
        const total = await db.installation.count();
        console.log(total);
        return {total}
    } catch (error) {
        return {error: "Database Error"}
    }
}

export default getTotalInstallations;