/**
 * Ez gyűjti össze a különböző modulok útvonalait egy modulba
 */

const express = require('express');
const router = express.Router();

// importáljuk az egyes modulok útvonalait
const userRoutes = require('./user.routes');
/* további példák:
    const productRoutes = require('./product.routes');
    const orderRoutes = require('./order.routes');
    const customerRoutes = require('./customer.routes');
*/

// regisztráljuk az útvonalakat
router.use('/users', userRoutes);
/* további példák:
    router.use('/products', productRoutes);
    router.use('/orders', orderRoutes);
    router.use('/customers', customerRoutes);
*/

module.exports = router;
