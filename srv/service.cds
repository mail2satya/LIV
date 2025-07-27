using { liv.db as db } from '../db/src/schema';
using { sap } from '@sap/cds/common';

service odata @(path : '/liv') {
    entity Devices as projection on db.Devices;
    entity Customers as projection on db.Customers;
    entity Orders as projection on db.Orders;
    entity DeliveryStatuses as projection on db.DeliveryStatuses;
    entity PaymentModes as projection on db.PaymentModes;
    entity Countries as projection on sap.common.Countries;
}