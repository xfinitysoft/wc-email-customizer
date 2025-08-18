import {templates} from './templates.js';
import {newAccount} from "../templates/Create - Account.js"
import {passwordReset} from "../templates/Password - reset.js";
import {customerNote} from "../templates/Customer - note.js";
import {customerIpaid} from "../templates/Customer-Invoice-Paid.js";
import {partailRefunded} from "../templates/Partial - refunded.js";
import {fullRefunded} from "../templates/Fully - refunded.js";
import {completedOrder} from "../templates/Completed - order.js";
import {processingOrder} from "../templates/Processing - order.js";
import {orderOnhold} from "../templates/Order - on - hold.js";
import {failedOrder} from "../templates/Failed - order.js";
import {cancelledOrder} from "../templates/cancelled - order.js";
import {newOrder} from "../templates/New - order.js";
export async function getTemplate(id: string|number) {
  const item = templates.find(item => item.article_id === +id);
  if (!item) return null;
  let data:any = null;
  switch (item.path) {
    case 'Create - Account.js':
      data = newAccount;
      break;
    case 'Password - reset.js':
      data = passwordReset;
      break;
    case 'Customer - note.js':
      data = customerNote;
      break;
    case 'Customer-Invoice-Paid.js':
      data = customerIpaid;
      break;
    case 'Partial - refunded.js':
      data = partailRefunded;
      break;
    case 'Fully - refunded.js':
      data = fullRefunded;
      break;
    case 'Completed - order.js':
      data = completedOrder;
      break;
    case 'Processing - order.js':
      data = processingOrder;
      break;
    case 'Order - on - hold.js':
      data = orderOnhold;
      break;
    case 'Failed - order.js':
      data = failedOrder;
      break;
    case 'cancelled - order.js':
      data = cancelledOrder;
      break;
    case 'New - order.js':
      data = newOrder;
      break;
  }
  return data;
}