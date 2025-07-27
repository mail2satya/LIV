const cds = require('@sap/cds');

module.exports = cds.service.impl('LivService', async function() {
    const { Orders, Devices, Customers } = this.entities;

    // Example: Auto-generate order number before creation
    this.before('CREATE', Orders, async (req) => {
        if (!req.data.orderNo) {
            const latestOrder = await SELECT.from(Orders).columns('orderNo').orderBy('orderNo desc').limit(1);
            let nextOrderNo = 'ORD00001';
            if (latestOrder.length > 0) {
                const lastNo = parseInt(latestOrder[0].orderNo.replace('ORD', ''), 10);
                nextOrderNo = 'ORD' + String(lastNo + 1).padStart(5, '0');
            }
            req.data.orderNo = nextOrderNo;
        }
    });

    // Example: Validate device price
    this.on('CREATE', Devices, async (req) => {
        if (req.data.price <= 0) {
            req.error(400, 'Device price must be greater than zero.');
        }
    });
});