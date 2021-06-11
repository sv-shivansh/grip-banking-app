const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const Detail = require("../models/account-detail");

//@route   Get api/
//@desc    Test api
//@access  Public
router.get("/", async (req, res) => {
  res.send("node api running");
});

router.get("/account", async (req, res) => {
  try {
    let account = await Detail.find();
    if (!account) {
      return res
        .status(400)
        .json({ errors: [{ msg: "Account doesnt exists" }] });
    } else {
      res.json(account);
    }
  } catch (err) {
    console.error(err.message + "\n" + err);
    res.status(500).send("Server error");
  }
});

//@route   Get api/account/:id
//@desc    Fetch the account details
//@access  Public
router.get("/account/:id", async (req, res) => {
  const accountNo = req.params.id;
  try {
    let account = await Detail.findOne({ accountNo });
    if (!account) {
      return res
        .status(400)
        .json({ errors: [{ msg: "Account doesnt exists" }] });
    } else {
      res.json(account);
    }
  } catch (err) {
    console.error(err.message + "\n" + err);
    res.status(500).send("Server error");
  }
});

//@route   Get api/account/:id
//@desc    Fetch the account details and populate the history
//@access  Public
router.get('/history/:account', async(req,res) => {
  const accountNo = req.params.account
  try{
    let account = await Detail.findOne({ accountNo }).populate('history.from', ['name']).populate('history.to', ['name']);
    if (!account) {
      return res
        .status(400)
        .json({ errors: [{ msg: "Account doesnt exists" }] });
    } else {
      res.json(account);
    }
  } catch (err) {
    console.error(err.message + "\n" + err);
    res.status(500).send("Server error");
  }
})

//@route   Put api/transfer
//@desc    Transfer amount transaction
//@access  Public
router.put(
  "/transfer",
  [
    check("from", "From account no is required").not().isEmpty(),
    check("to", "To account no is is required").not().isEmpty(),
    check("amount", "Amount is required").not().isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { from, to, amount } = req.body;
    try {
      let sender = await Detail.findOne({ accountNo: from });
      let reciever = await Detail.findOne({ accountNo: to });
      if (!sender || !reciever) {
        return res
          .status(400)
          .json({
            errors: [{ msg: "Transaction Cancelled (Account Doesnt exist)" }],
          });
      } else {
        if(amount <= 0){
          return res
          .status(400)
          .json({
            errors: [{ msg: "Transaction Cancelled (Amount should be greater than 0)" }],
          });
        }
        if(sender.balance <= amount){
            return res
          .status(400)
          .json({
            errors: [{ msg: "Transaction Cancelled (Not sufficient fund)" }],
          });
        }
        else{
            const transactionSender = {
                from: sender._id,
                to: reciever._id,
                action: 'Debit',
                amount: amount
            }
            const transactionReciever = {
                from: sender._id,
                to: reciever._id,
                action: 'Credit',
                amount: amount
            }
            sender.balance = sender.balance - amount
            reciever.balance = reciever.balance + +amount
            sender.history.unshift(transactionSender)
            reciever.history.unshift(transactionReciever)
            await sender.save()
            await reciever.save()
            res.json({msg:"Transaction successful"})
        }
      }
    } catch (err) {
      console.error(err.message + "\n" + err);
      res.status(500).send("Server error");
    }
  }
);

//@route   Post api/create
//@desc    Create new account
//@access  Public
router.post(
  "/create",
  [
    check("name", "Name is required").not().isEmpty(),
    check("accountNo", "Account Number is required").not().isEmpty(),
    check("balance", "Balance amount is required").not().isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { name, accountNo, balance } = req.body;
    try {
      let account = await Detail.findOne({ accountNo });
      if (account) {
        return res
          .status(400)
          .json({ errors: [{ msg: "Account already exists" }] });
      }
      account = new Detail({
        name,
        accountNo,
        balance,
      });
      await account.save();
      res.json({ msg: "Successfully created" });
    } catch (err) {
      console.error(err.message + "\n" + err);
      res.status(500).send("Server error");
    }
  }
);

module.exports = router;
