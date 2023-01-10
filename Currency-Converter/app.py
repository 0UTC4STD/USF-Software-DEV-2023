from flask import Flask, request, render_template, redirect, session, jsonify, flash
from forex_python.converter import CurrencyRates, CurrencyCodes
from currency import CurrencyChecks

app = Flask(__name__)
app.config["SECRET_KEY"] = "money"
c = CurrencyRates()
cc = CurrencyCodes()


@app.route("/",)
def main_page():
    return render_template("index.html")


@app.route("/result", methods=["POST"])
def display_results():
    input_currency = request.form["input"]
    output_currency = request.form["output"]

    try:
        amount = float(request.form["amount"])

        input_symbol = cc.get_symbol(input_currency)
        output_symbol = cc.get_symbol(output_currency)
        input_name = cc.get_currency_name(input_currency)
        output_name = cc.get_currency_name(output_currency)

        converted = c.convert(input_currency, output_currency, amount)

        return render_template(
            "results.html",
            amount=amount,
            converted=converted,
            input_symbol=input_symbol,
            output_symbol=output_symbol,
            input_name=input_name,
            output_name=output_name,
        )
    except ValueError:
        flash("Error: Please input an amount", "error")
        return redirect("/")
    except Exception as err:
        print(err)
        err = str(err)
        if err == "Currency Rates Source Not Ready":
            flash("Error: Not a Valid Currency Code", "error")
        return redirect("/")