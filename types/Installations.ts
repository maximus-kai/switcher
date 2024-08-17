import { CustomerType, RadioStatus } from "@prisma/client"; // Import the enums
export interface Installation{
    id: string;
    installationDate: Date;
    macId: string;
    PaymentRef: string;
    customerId: string;
    customer: {
        id: string;
        firstName: string;
        lastName: string;
        email: string;
        homeAddress: string;
        phoneNumber: string;
        connectedSplitter: string;
        customerType: CustomerType; // Use the Prisma enum type
        radioStatus: RadioStatus; // Use the Prisma enum type
    }
}

// Define a type that includes both Installation and related Customer
// export interface InstallationWithCustomer extends Installation {
//     customer: {
//         id: string;
//         firstName: string;
//         lastName: string;
//         email: string;
//         homeAddress: string;
//         phoneNumber: string;
//         connectedSplitter: string;
//         customerType: CustomerType;
//         radioStatus: RadioStatus;
//     };
// }
