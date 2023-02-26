class mainPage {
  get nameField() {
    return $('[id="com.fghilmany.dietmealapp:id/et_name"]');
  }
  get weightField() {
    return $('[id="com.fghilmany.dietmealapp:id/et_weight"]');
  }
  get heightField() {
    return $('[id="com.fghilmany.dietmealapp:id/et_height"]');
  }
  get genderMaleRadioButton() {
    return $('[id="com.fghilmany.dietmealapp:id/rb_male"]');
  }
  get nextButton() {
    return $('[id="com.fghilmany.dietmealapp:id/bt_next"]');
  }

  async setData(name, weight, height) {
    await this.nameField.setValue(name);
    await this.weightField.setValue(weight);
    await this.heightField.setValue(height);
    await this.genderMaleRadioButton.click();
    await this.nextButton.click();
  }
}

module.exports = new mainPage();
