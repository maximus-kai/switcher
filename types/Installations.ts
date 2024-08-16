import { CustomerType, RadioStatus } from "@prisma/client"; // Import the enums
export interface Installation{
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    homeAddress: string;
    phoneNumber: string;
    connectedSplitter: string;
    customerType: CustomerType; // Use the Prisma enum type
    radioStatus: RadioStatus;   // Use the Prisma enum type
    macId: string;
    PaymentRef: string;
    customerId: string;
}
