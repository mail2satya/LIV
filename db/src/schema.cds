using { cuid, managed, sap } from '@sap/cds/common';

namespace liv.db;

entity Devices : cuid, managed {
    name        : String(100);
    description : String(1000);
    IMEI        : String(15) @(unique);
    price       : Decimal(9, 2);
    currency    : String(3);
}

entity Customers : cuid, managed {
    name    : String(100);
    email   : String(255) @(unique);
    city    : String(100);
    country : Association to sap.common.Countries;
}

entity Orders : cuid, managed {
    orderNo       : String(20) @(unique);
    date          : DateTime;
    customer      : Association to Customers;
    status        : Association to DeliveryStatuses;
    paymentMode   : Association to PaymentModes;
    // managed aspect provides createdBy, createdAt, changedBy, changedAt
}

entity DeliveryStatuses : cuid {
    name : String(50) @(unique);
    descr : String(100);
}

entity PaymentModes : cuid {
    name : String(50) @(unique);
    descr : String(100);
}