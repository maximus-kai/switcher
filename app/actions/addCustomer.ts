'use server'
// import { auth } from "@clerk/nextjs/server";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { CustomerType, RadioStatus } from "@prisma/client"; // Import the enums

interface CustomerData {
    firstName: string;
    lastName: string;
    email: string;
    homeAddress: string;
    phoneNumber: string;
    connectedSplitter: string;
    customerType: CustomerType; // Use the Prisma enum type
    radioStatus: RadioStatus;   // Use the Prisma enum type
}

interface InstallationData {
    macId: string;
    PaymentRef: string;
    customerId: string; // Include customerId in the InstallationData interface
}

interface CustomerResult {
    data?: CustomerData;
    error?: string;
}

async function addCustomer(formData: FormData): Promise<CustomerResult> {
    const firstNameValue = formData.get('firstName');
    const lastNameValue = formData.get('lastName');
    const emailValue = formData.get('email');
    const homeAddressValue = formData.get('homeAddress');
    const phoneNumberValue = formData.get('phoneNumber');
    const connectedSplitterValue = formData.get('connectedSplitter');
    const customerTypeValue = formData.get('customerType');
    const radioStatusValue = formData.get('radioStatus');
    const macIdValue = formData.get('macId');
    const PaymentRefValue = formData.get('PaymentRef');

    // check for input
    if (!firstNameValue || !lastNameValue || !emailValue || !homeAddressValue || !phoneNumberValue || !connectedSplitterValue || !customerTypeValue || !radioStatusValue || !macIdValue || !PaymentRefValue || PaymentRefValue === '') {
        return { error: 'Something is missing' };
    }

    // Convert input values to string
    const firstName: string = firstNameValue.toString();
    const lastName: string = lastNameValue.toString();
    const email: string = emailValue.toString();
    const homeAddress: string = homeAddressValue.toString();
    const phoneNumber: string = phoneNumberValue.toString();
    const connectedSplitter: string = connectedSplitterValue.toString();
    const customerType: CustomerType = customerTypeValue as CustomerType; // Type casting to enum
    const radioStatus: RadioStatus = radioStatusValue as RadioStatus;     // Type casting to enum
    const macId: string = macIdValue.toString();
    const PaymentRef: string = PaymentRefValue.toString();

    try {
        // Create the Customer record and get the ID
        const customer = await db.customer.create({
            data: {
                firstName,
                lastName,
                email,
                homeAddress,
                phoneNumber,
                connectedSplitter,
                customerType,
                radioStatus,
            },
        });

        // Use the customer's ID when creating the Installation record
        const installation = await db.installation.create({
            data: {
                macId,
                PaymentRef,
                customerId: customer.id, // Use the created customer's ID
            },
        });

        revalidatePath('/');
        return { data: customer };
    } catch (error) {
        return { error: 'Customer not added' };
    }
}

export default addCustomer;
