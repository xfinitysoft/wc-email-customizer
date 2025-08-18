import createAccount   from '../images/create-account.png';
import resetPassword   from '../images/reset-password.png';
import customerNote    from '../images/customer-note.png';
import customerIpaid   from '../images/customer-invoice-paid.png';
import fullRefunded    from '../images/full-refunded.png';
import completedOrder  from '../images/completed-order.png';
import processingOrder from '../images/processing-order.png';
import orderOnhold     from '../images/order-on-hold.png';
import failedOrder     from '../images/failed-order.png';
import cancelledOrder  from '../images/cancelled-order.png';
import newOrder        from '../images/new-order.png';
import partailRefund   from '../images/partail-refund.png';

export const templates = [
    {
        path:"Create - Account.js",
        article_id:1,
        title :"Create Account",
        etype:"wc_new_account",
        summary:"Create  Account",
        picture:`${createAccount }`,
        origin_source:"",
        secret:0,
        level:10,
        created_at:1645697464,
        updated_at:1645865828,
        deleted_at:0,
        tags:[]
    },
    {
        path:"Password - reset.js",
        article_id: 2,
        title: "Reset Password",
        summary: "Reset Password",
        picture: `${resetPassword}`,
        etype:"wc_reset_password",
        origin_source: "",
        secret: 0,
        level: 10,
        created_at: 1645697464,
        updated_at: 1645865828,
        deleted_at: 0,
        tags:[]
    },
    {
        path:"Customer - note.js",
        article_id: 3,
        title: "Customer Note",
        summary: "Customer Note",
        picture: `${customerNote}`,
        etype:"wc_customer_note",
        origin_source: "",
        secret: 0,
        level: 10,
        created_at: 1645697464,
        updated_at: 1645865828,
        deleted_at: 0,
        tags:[]
    },
    {
        path:"Customer-Invoice-Paid.js",
        article_id: 4,
        title: "Invoice for Order",
        summary: "Invoice for Order",
        picture: `${customerIpaid}`,
        etype:"wc_customer_invoice_paid",
        origin_source: "",
        secret: 0,
        level: 10,
        created_at: 1645697464,
        updated_at: 1645865828,
        deleted_at: 0,
        tags: []
    },
    {
        path:"Partial - refunded.js",
        article_id: 5,
        title: "Partial - refunded",
        summary: "Partial - refunded",
        picture:`${partailRefund}`,
        etype:"wc_partial_refunded_order",
        origin_source: "",
        secret: 0,
        level: 10,
        created_at: 1645697464,
        updated_at: 1645865828,
        deleted_at: 0,
        tags: []
    },
    {
        path:"Fully - refunded.js",
        article_id: 6,
        title: "Fully - refunded",
        summary: "Fully - refunded",
        picture: `${fullRefunded}`,
        etype:"wc_fully_refunded_order",
        origin_source: "",
        secret: 0,
        level: 10,
        created_at: 1645697464,
        updated_at: 1645865828,
        deleted_at: 0,
        tags: []
    },
    {
        path:"Completed - order.js",
        article_id: 7,
        title: "Completed - order",
        summary: "Completed - order",
        picture:`${completedOrder}`,
        etype:"wc_completed_order",
        origin_source: "",
        secret: 0,
        level: 10,
        created_at: 1645697464,
        updated_at: 1645865828,
        deleted_at: 0,
        tags: []
    },
    {
        path:"Processing - order.js",
        article_id: 8,
        title: "Processing - order",
        summary: "Processing - order",
        picture:`${processingOrder}`,
        etype:"wc_processing_order",
        origin_source: "",
        secret: 0,
        level: 10,
        created_at: 1645697464,
        updated_at: 1645865828,
        deleted_at: 0,
        tags: []
    },
    {
        path:"Order - on - hold.js",
        article_id: 9,
        title: "Order - on - hold",
        summary: "Order - on - hold",
        picture: `${orderOnhold}`,
        etype:"wc_order_on_hold",
        origin_source: "",
        secret: 0,
        level: 10,
        created_at: 1645697464,
        updated_at: 1645865828,
        deleted_at: 0,
        tags: []
    },
    {
        path:"Failed - order.js",
        article_id: 10,
        title: "Failed - order",
        summary: "Failed - order",
        picture: `${failedOrder}`,
        etype:"wc_failed_order",
        origin_source: "",
        secret: 0,
        level: 10,
        created_at: 1645697464,
        updated_at: 1645865828,
        deleted_at: 0,
        tags: []
    },
    {
        path:"cancelled - order.js",
        article_id: 11,
        title: "cancelled - order",
        summary: "cancelled - order",
        picture: `${cancelledOrder}`,
        etype:"wc_cancelled_order",
        origin_source: "",
        secret: 0,
        level: 10,
        created_at: 1645697464,
        updated_at: 1645865828,
        deleted_at: 0,
        tags: []
    },
    {
        path:"New - order.js",
        article_id: 12,
        title: "New - order",
        summary: "New - order",
        picture: `${newOrder}`,
        etype:"wc_new_order",
        origin_source: "",
        secret: 0,
        level: 10,
        created_at: 1645697464,
        updated_at: 1645865828,
        deleted_at: 0,
        tags: []
    }
    
];

