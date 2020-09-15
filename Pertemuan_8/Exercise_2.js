let Account = {

    Name: 'Kevin',
    Expenses: [],
  
    addExpense(description, amount) 
    {
        Account.Expenses.push({

            description: description,
            amount: amount

        });
    },
    getAccountSummary()
    {
      let totalExpenses = 0
      Account.Expenses.forEach(function(Expenses){
      totalExpenses = totalExpenses + Expenses.amount
      });
      return totalExpenses;
  }
  }

  Account.addExpense('Lauk', 12000);
  Account.addExpense('Nasi', 5000);
  console.log("Total Pengeluaran " +  Account.Name + " adalah " + Account.getAccountSummary())
  