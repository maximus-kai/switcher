// 'use server';
// import { db } from "@/lib/db";

// interface Customer {

// }

// async function GetCustomers(): Promise<{
//     customer?: Customer[];
//     error?: string;
// }> {
//     try {
//         const customers = await db.customer.findMany({
//             where: {},
//             orderBy: {
//                 customerType: 'desc'
//             },
//         });
//         return { customers };
//     }
// }
// export default GetCustomers;