import {templates} from './templates.js';
import {newAccount} from '../templates/create-account.js';
import {passwordReset} from '../templates/password-reset.js';
import {customerNote} from '../templates/customer-note.js';
import {customerIpaid} from '../templates/Customer-Invoice-Paid.js';
import {partailRefunded} from '../templates/partial-refunded.js';
import {fullRefunded} from '../templates/fully-refunded.js';
import {completedOrder} from '../templates/completed-order.js';
import {processingOrder} from '../templates/processing-order.js';
import {orderOnhold} from '../templates/order-on-hold.js';
import {failedOrder} from '../templates/failed-order.js';
import {cancelledOrder} from '../templates/cancelled-order.js';
import {newOrder} from '../templates/new-order.js';
export async function getTemplate(id: string|number) {
  const item = templates.find(item => item.article_id === +id);
  if (!item) return null;
  let data:any = null;
  switch (item.path) {
    case 'create-account.js':
      data = newAccount;
      break;
    case 'password-reset.js':
      data = passwordReset;
      break;
    case 'customer-note.js':
      data = customerNote;
      break;
    case 'Customer-Invoice-Paid.js':
      data = customerIpaid;
      break;
    case 'partial-refunded.js':
      data = partailRefunded;
      break;
    case 'fully-refunded.js':
      data = fullRefunded;
      break;
    case 'completed-order.js':
      data = completedOrder;
      break;
    case 'processing-order.js':
      data = processingOrder;
      break;
    case 'order-on-hold.js':
      data = orderOnhold;
      break;
    case 'failed-order.js':
      data = failedOrder;
      break;
    case 'cancelled-order.js':
      data = cancelledOrder;
      break;
    case 'new-order.js':
      data = newOrder;
      break;
  }
  return data;
}
