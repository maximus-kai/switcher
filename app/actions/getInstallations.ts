"use server";
import { db } from "@/lib/db";
import { Installation } from "@/types/Installations";

async function getInstallations(): Promise<{
    installations?: Installation[];
    error?: string;
}> {
    try {
        const installations = await db.installation.findMany({
            orderBy: {
                installationDate: 'desc',
            },
            include: {
                customer: true, // Include related customer data
            },
        });
        console.log(installations);
        return {installations};
    } catch (error) {
        return { error: "Database Error" };
    }
}

export default getInstallations;
