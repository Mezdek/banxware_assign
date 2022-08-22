const formatDate = (input) => {
  const date = new Date(input);
  const dateArr = date.toString().split(" ");
  return `${dateArr[2]} ${dateArr[1]}`;
};

const filterStatus = (data, statuses = []) => {
  try {
    return data.filter((item) => statuses.includes(item.status));
  } catch (err) {
    console.log("filterStatus", err);
  }
};

const setTimeRange = (data, range) => {
  try {
    switch (range) {
      case "1D":
        return data.filter(
          (item) =>
            new Date(item.date) >
            new Date(new Date().setDate(new Date().getDate() - 1))
        );
      case "5D":
        return data.filter(
          (item) =>
            new Date(item.date) >
            new Date(new Date().setDate(new Date().getDate() - 5))
        );
      case "1M":
        return data.filter(
          (item) =>
            new Date(item.date) >
            new Date(new Date().setMonth(new Date().getMonth() - 1))
        );
      case "3M":
        return data.filter(
          (item) =>
            new Date(item.date) >
            new Date(new Date().setMonth(new Date().getMonth() - 3))
        );
      case "6M":
        return data.filter(
          (item) =>
            new Date(item.date) >
            new Date(new Date().setMonth(new Date().getMonth() - 6))
        );
      case "1Y":
        return data.filter(
          (item) =>
            new Date(item.date) >
            new Date(new Date().setFullYear(new Date().getFullYear() - 1))
        );
      default:
        return data;
    }
  } catch (err) {
    console.log("setTimeRange", err);
  }
};

const filterData = (data, timeRange, statuses) => {
  try {
    return setTimeRange(filterStatus(data, statuses), timeRange).sort(
      (a, b) => new Date(a.date) - new Date(b.date)
    );
  } catch (err) {
    console.log("filterData", err);
  }
};

const getBalanceHistory = (data, currentBalance) => {
  try {
    const balanceHistory = [
      { date: formatDate(new Date()), balance: currentBalance },
    ];
    for (let i = data.length - 1; i >= 0; i--) {
      balanceHistory.push({
        date: formatDate(new Date(data[i].date)),
        balance:
          balanceHistory[balanceHistory.length - 1].balance - data[i].amount,
      });
    }
    return balanceHistory.reverse();
  } catch (err) {
    console.log("getBalanceHistory", err);
  }
};
module.exports = {
  formatDate,
  filterStatus,
  setTimeRange,
  filterData,
  getBalanceHistory,
};
