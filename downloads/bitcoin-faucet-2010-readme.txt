The Bitcoin Faucet, 2010 to 2012: what is in these files

They go with the LearnBitcoin chapter "The Bitcoin Faucet: Five Bitcoin for
Anyone Who Asked", https://www.learnbitcoin.com/rabbit-hole/bitcoin-faucet-2010

The five files hold a count of the faucet that Gavin Andresen ran at
freebitcoins.appspot.com: the payments into its two wallets and the payments
out, read from the Bitcoin Core node powering ChainQuery (blocks 40,000 to
216,500, February 2010 to January 2013). The chapter says how the wallets
were followed and how far the count can be trusted. Amounts are in bitcoin
(BTC). Times are UTC, and for a payment they are the time stamped on its
block. "His own wallet" is Gavin Andresen's.

bitcoin-faucet-2010-months.csv    one row for each month, June 2010 to December 2012

  payments_in, btc_in    payments into the faucet's wallets, and their sum
  in_from_his_own_wallet, in_mined_by_the_wallet, in_round_trip, in_eff_coins,
  in_payments_that_spend_a_payout, in_sent_back_to_its_sender, in_from_others
                         the same bitcoin by source: his own wallet; two block
                         rewards won by the faucet's wallet; the 1,565 BTC that
                         came back on June 14, 2010; the coins the EFF passed
                         on; payments that spend one of the faucet's own
                         payouts; one payment the faucet later sent back; and
                         everybody else
  wallet_sends           transactions the faucet's wallet made
  payouts, btc_paid_out  payouts to other people, and their sum
  payouts_of_5 to payouts_of_0.001
                         payouts by size; payouts_of_other_sizes is a single
                         payout of 0.06 BTC in September 2010
  test_payouts_to_his_own_addresses, btc_test_payouts
                         payouts of a standard amount to addresses of his own
                         wallet (they look like tests)
  btc_moved_to_his_own_wallet
                         other sends to his own wallet: 122.43 BTC on August 4,
                         2010, and two of 1 BTC nine days later
  btc_round_trip_out     the 1,570 BTC that left on June 13, 2010 (1,565 came
                         back three hours later: in_round_trip)
  btc_sent_back_to_its_sender
                         9.99 BTC returned to its sender in September 2012
  btc_other_sends        two sends of 0.01 BTC that the count does not explain
  btc_stolen             the theft of March 1, 2012
  btc_fees               fees the faucet's wallet paid

  The books: add up btc_in, take away btc_paid_out, btc_test_payouts, the
  four columns after it, btc_stolen and btc_fees, and 20.11306939 BTC is left.
  That is what the wallets held when the count ends.

bitcoin-faucet-2010-days.csv      one row for each of the 789 days on which the faucet made a payout

  day_utc, payouts, btc_paid_out, and the payouts by size, as above

bitcoin-faucet-2010-payments-in.csv    one row for each payment in

  block, time_utc, txid, btc
  source                 one of the sources above. Six rows are marked "paid to
                         ... after the theft of March 1, 2012": they went to
                         addresses the faucet could no longer spend from, and
                         they are in no total. The other 2,696 rows add up to
                         19,724.32157404 BTC.
  how_it_is_known_to_be_his
                         for a payment from his own wallet, the evidence

bitcoin-faucet-2010-five-btc.csv       one row for each of the 2,448 payouts of exactly 5 BTC to other people

  block, time_utc, txid
  output                 the number of the output within that transaction,
                         counted from 0
  never_spent_as_of_block_976691
                         yes or no, as of block 976,691 (November 20, 2026)

bitcoin-faucet-2010-checkpoints.csv    the 23 moments when the faucet's page or a forum post gave its balance

  moment_utc             when the page was saved or the post was made
  btc_the_page_or_post_gave
  btc_traced             the balance by our count at that moment
  difference             btc_traced less btc_the_page_or_post_gave
  wallet                 1 is the faucet's first wallet (to March 1, 2012),
                         2 its second
  last_block_counted, that_block_stamped_utc
                         the last block before the moment, and its time stamp
  where_the_figure_is    the saved copy of the page (by its Internet Archive
                         stamp) or the forum post

What the files do not hold: a row for each of the 155,665 payouts smaller
than 5 BTC. Those are counted by day and by month.
