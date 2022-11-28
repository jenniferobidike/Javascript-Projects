const checkCashRegister = (price, cash, cid) => {

  const UNIT_AMOUNT = {

    "PENNY": .01,

    "NICKEL": .05,

    "DIME": .10,

    "QUARTER": .25,

    "ONE": 1.00,

    "FIVE": 5.00,

    "TEN": 10.00,

    "TWENTY": 20.00,

    "ONE HUNDRED": 100.00

  }

  let totalCID = 0;

  for (let element of cid) {

    totalCID += element[1];

  }

  totalCID = totalCID.toFixed(2); //converts from decimal to whole numbers

  let balance = cash - price;

  const holder = [];

  if (balance > totalCID) {

    return { status: "INSUFFICIENT_FUNDS", change: holder };

  } else if (balance.toFixed(2) === totalCID) {

    return { status: "CLOSED", change: cid };

  } else {

    cid = cid.reverse();

    for (let elem of cid) {

      let temp = [elem[0], 0];

      while (balance >= UNIT_AMOUNT[elem[0]] && elem[1] > 0) {

        temp[1] += UNIT_AMOUNT[elem[0]];

        elem[1] -= UNIT_AMOUNT[elem[0]];

        balance -= UNIT_AMOUNT[elem[0]];

        balance = balance.toFixed(2);

      }

      if (temp[1] > 0) {

        holder.push(temp);

      }

    }

  }

  if (balance > 0) {

    return { status: "INSUFFICIENT_FUNDS", change: [] };

  }

  return { status: "OPEN", change: holder};

}
