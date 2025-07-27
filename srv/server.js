const cds = require('@sap/cds')
const v2adapter = require('@cap-js-community/odata-v2-adapter')
cds.on('bootstrap', app => app.use(v2adapter()))
module.exports = cds.server

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