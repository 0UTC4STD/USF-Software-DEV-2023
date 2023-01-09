from flask import Flask, render_template, request, flash, redirect
from forex_python.converter import CurrencyCodes, CurrencyRates


app = Flask(__name__)
app.config["SECRET_KEY"] = "money"

Currency = get_currencies()

@app.route("/")
def show_home():
    """Renders the homepage"""

    return render_template("Index.html", currencies=Currency)

@app.route("/convert", methods=["POST"])
def convert():
    """Process data from the form to calculate currency conversion."""
    
    from_curr = request.form["from_currency"][:3]
    to_curr = request.form["to_currency"][:3]
    amount = request.form["amount"]
    
    if not valid_from_curr:
        flash("Please select FROM currency.")
    if not valid_to_curr:
        flash("Please select TO currency.")
    if not valid_amount:
        flash(f"Invalid amount: {amount}")
    
    if valid_from_curr and valid_to_curr and valid_amount:
        amount = round(float(amount),2)
        rates = CurrencyRates()
        codes = CurrencyCodes()
        converted_amount = rates.convert(from_curr, to_curr, amount)
        from_info = {
          "symbol": codes.get_symbol(from_curr),
          "name": codes.get_currency_name(from_curr),
          "code": from_curr 
        }
        to_info = {
          "symbol": codes.get_symbol(to_curr),
          "name": codes.get_currency_name(to_curr),
          "code": to_curr
        }
    
        return render_template("result.html", from_info=from_info, 
                amount="{:,.2f}".format(amount), to_info=to_info, 
                converted_amount="{:,.2f}".format(converted_amount) )
    else:
        return redirect("/")

def is_valid_currency(currency): 
    c = CurrencyCodes()
    return c.get_currency_name(currency) is not None

def is_valid_amount(amount):
    try:
        float(amount)
    except ValueError: 
        return False
    else: 
        if float(amount) >= 0:
            return True
        else: 
            return False

def get_currencies():
    c = CurrencyRates()
    c_codes = CurrencyCodes()
    currs_obj = c.get_rates('USD').keys()
    curr_codes = [curr for curr in currs_obj]
    curr_codes.append('USD')
    currencies = []
    for curr in curr_codes:
        name = c_codes.get_currency_name(curr)
        currencies.append(f"{curr} - {name}")
    currencies.sort()
    return currencies