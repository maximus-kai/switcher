'use server';
import { db } from "@/lib/db";

interface Customer {

}

async function GetCustomers(): Promise<{
    customer?: Customer[];
    error?: string;
}> {
    try {
        const transactions = await db.customer.findMany({
            where: {},
            orderBy: {
                createdAt: 'desc'
            },
        });
        return { customers };
    }
}
export default GetCustomers;