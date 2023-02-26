class dashboardPage {
    get dashboard() {
      return $('[id="com.fghilmany.dietmealapp:id/view"]');
    }

  }
  
  module.exports = new dashboardPage();