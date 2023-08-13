# 4percentwithvol
#Stock Breakout Analysis
This script identifies and visualizes stock breakouts based on a given percentage change and volume criteria. A breakout is identified when the stock's closing price has a percentage change greater than a specified threshold (e.g., 4%) and the volume is above the average volume.

Features:
Fetches stock symbols.
Identifies breakouts based on percentage change and volume.
Visualizes the stock data around the breakout day using candlestick charts.
Highlights the breakout day with a dot below the candle.

Requirements:
Python 3.x
Libraries: requests, pandas, mplfinance, tqdm

To install the required libraries, run:
pip install requests pandas mplfinance tqdm

Usage:
Set your API key in the API_KEY constant.
Run the script.
The script will process the first 20 stock symbols by default. You can adjust this by modifying the symbols[:20] slice.
For each identified breakout, the script will visualize the stock data for 2 weeks before and after the breakout day.

Notes:
Ensure you have a valid API key from Polygon.io.
Be cautious about making too many requests in a short period to avoid hitting rate limits.
The breakout criteria (percentage change and volume) can be adjusted as needed.
