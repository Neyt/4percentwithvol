import React, { useState, useEffect } from 'react';
import './App.css';

interface Slide {
  id: number;
  title: string;
  subtitle?: string;
  content: React.ReactNode;
  background: string;
}

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState<'forward' | 'backward'>('forward');

  const slides: Slide[] = [
    {
      id: 0,
      title: 'Quantitative Finance Toolkit',
      subtitle: 'A Complete Suite for Algorithmic Trading',
      content: (
        <div className="space-y-8">
          <p className="text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Three powerful libraries working together to streamline your quantitative trading workflow
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 p-6 rounded-xl border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 hover:scale-105">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-bold text-blue-400 mb-2">Strategy Automation</h3>
              <p className="text-gray-400">Deploy and manage trading strategies</p>
            </div>
            <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 p-6 rounded-xl border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 hover:scale-105">
              <div className="text-4xl mb-4">🔌</div>
              <h3 className="text-xl font-bold text-purple-400 mb-2">Data Connectivity</h3>
              <p className="text-gray-400">Connect to market data sources</p>
            </div>
            <div className="bg-gradient-to-br from-green-500/20 to-green-600/20 p-6 rounded-xl border border-green-500/30 hover:border-green-400/50 transition-all duration-300 hover:scale-105">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-green-400 mb-2">Research Framework</h3>
              <p className="text-gray-400">Backtest and analyze strategies</p>
            </div>
          </div>
        </div>
      ),
      background: 'from-slate-900 via-blue-900/20 to-slate-900'
    },
    {
      id: 1,
      title: 'Strategy Automation',
      subtitle: 'Deploy Trading Strategies with Confidence',
      content: (
        <div className="space-y-6 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-800/50 p-6 rounded-xl border border-blue-500/30">
              <h3 className="text-xl font-bold text-blue-400 mb-4">✨ Key Features</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3">▸</span>
                  <span>Automated strategy execution and monitoring</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3">▸</span>
                  <span>Real-time position management</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3">▸</span>
                  <span>Risk controls and safety mechanisms</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3">▸</span>
                  <span>Multi-strategy portfolio orchestration</span>
                </li>
              </ul>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-xl border border-blue-500/30">
              <h3 className="text-xl font-bold text-blue-400 mb-4">🎯 Use Cases</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3">•</span>
                  <span>Deploy algorithmic trading strategies</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3">•</span>
                  <span>Manage multiple strategies simultaneously</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3">•</span>
                  <span>Monitor performance in real-time</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3">•</span>
                  <span>Implement automated risk management</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-slate-900/50 p-6 rounded-xl border border-blue-500/20 mt-6">
            <h3 className="text-lg font-bold text-blue-300 mb-3">Code Example</h3>
            <pre className="bg-slate-950 p-4 rounded-lg overflow-x-auto">
              <code className="text-sm text-green-400">{`# Initialize automation engine
engine = AutomationEngine()

# Deploy strategy
strategy = MomentumStrategy(
    symbols=['AAPL', 'GOOGL'],
    timeframe='1h',
    risk_per_trade=0.02
)

engine.deploy(strategy)
engine.start()  # Begin automated execution`}</code>
            </pre>
          </div>
        </div>
      ),
      background: 'from-slate-900 via-blue-900/30 to-slate-900'
    },
    {
      id: 2,
      title: 'Data Connectivity',
      subtitle: 'Seamless Integration with Market Data',
      content: (
        <div className="space-y-6 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-800/50 p-6 rounded-xl border border-purple-500/30">
              <h3 className="text-xl font-bold text-purple-400 mb-4">✨ Key Features</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-purple-400 mr-3">▸</span>
                  <span>Unified API for multiple data providers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-3">▸</span>
                  <span>Real-time and historical data access</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-3">▸</span>
                  <span>WebSocket streaming for live updates</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-3">▸</span>
                  <span>Automatic data normalization and cleaning</span>
                </li>
              </ul>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-xl border border-purple-500/30">
              <h3 className="text-xl font-bold text-purple-400 mb-4">🔗 Supported Sources</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-purple-400 mr-3">•</span>
                  <span>Major broker APIs (Interactive Brokers, etc.)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-3">•</span>
                  <span>Market data providers (Alpha Vantage, etc.)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-3">•</span>
                  <span>Cryptocurrency exchanges</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-3">•</span>
                  <span>Custom data sources via adapters</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-slate-900/50 p-6 rounded-xl border border-purple-500/20 mt-6">
            <h3 className="text-lg font-bold text-purple-300 mb-3">Code Example</h3>
            <pre className="bg-slate-950 p-4 rounded-lg overflow-x-auto">
              <code className="text-sm text-green-400">{`# Connect to data source
connector = DataConnector(provider='broker_api')

# Fetch historical data
data = connector.get_historical(
    symbol='AAPL',
    start='2024-01-01',
    end='2024-12-31',
    interval='1d'
)

# Stream real-time data
stream = connector.stream(['AAPL', 'GOOGL'])
for tick in stream:
    print(f"{tick.symbol}: {tick.price}")`}</code>
            </pre>
          </div>
        </div>
      ),
      background: 'from-slate-900 via-purple-900/30 to-slate-900'
    },
    {
      id: 3,
      title: 'Research Framework',
      subtitle: 'Backtest, Analyze, and Optimize',
      content: (
        <div className="space-y-6 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-800/50 p-6 rounded-xl border border-green-500/30">
              <h3 className="text-xl font-bold text-green-400 mb-4">✨ Key Features</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">▸</span>
                  <span>High-performance backtesting engine</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">▸</span>
                  <span>Comprehensive performance metrics</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">▸</span>
                  <span>Parameter optimization and walk-forward analysis</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">▸</span>
                  <span>Interactive visualization and reporting</span>
                </li>
              </ul>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-xl border border-green-500/30">
              <h3 className="text-xl font-bold text-green-400 mb-4">📈 Analytics</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">•</span>
                  <span>Sharpe ratio, Sortino ratio, max drawdown</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">•</span>
                  <span>Win rate, profit factor, expectancy</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">•</span>
                  <span>Equity curves and drawdown analysis</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">•</span>
                  <span>Monte Carlo simulations</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-slate-900/50 p-6 rounded-xl border border-green-500/20 mt-6">
            <h3 className="text-lg font-bold text-green-300 mb-3">Code Example</h3>
            <pre className="bg-slate-950 p-4 rounded-lg overflow-x-auto">
              <code className="text-sm text-green-400">{`# Initialize research environment
research = ResearchEngine()

# Define strategy
strategy = MyStrategy()

# Run backtest
results = research.backtest(
    strategy=strategy,
    data=historical_data,
    initial_capital=100000
)

# Analyze results
print(f"Sharpe Ratio: {results.sharpe_ratio:.2f}")
print(f"Max Drawdown: {results.max_drawdown:.2%}")
results.plot_equity_curve()`}</code>
            </pre>
          </div>
        </div>
      ),
      background: 'from-slate-900 via-green-900/30 to-slate-900'
    },
    {
      id: 4,
      title: 'Complete Workflow',
      subtitle: 'From Research to Production',
      content: (
        <div className="space-y-8 max-w-5xl mx-auto">
          <div className="relative">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex-1 bg-gradient-to-br from-green-500/20 to-green-600/20 p-8 rounded-xl border border-green-500/30 hover:scale-105 transition-transform duration-300">
                <div className="text-5xl mb-4 text-center">📊</div>
                <h3 className="text-2xl font-bold text-green-400 mb-3 text-center">1. Research</h3>
                <p className="text-gray-300 text-center">Develop and backtest strategies using historical data</p>
              </div>
              
              <div className="hidden md:block text-4xl text-blue-400">→</div>
              
              <div className="flex-1 bg-gradient-to-br from-purple-500/20 to-purple-600/20 p-8 rounded-xl border border-purple-500/30 hover:scale-105 transition-transform duration-300">
                <div className="text-5xl mb-4 text-center">🔌</div>
                <h3 className="text-2xl font-bold text-purple-400 mb-3 text-center">2. Connect</h3>
                <p className="text-gray-300 text-center">Integrate with live market data and broker APIs</p>
              </div>
              
              <div className="hidden md:block text-4xl text-blue-400">→</div>
              
              <div className="flex-1 bg-gradient-to-br from-blue-500/20 to-blue-600/20 p-8 rounded-xl border border-blue-500/30 hover:scale-105 transition-transform duration-300">
                <div className="text-5xl mb-4 text-center">🤖</div>
                <h3 className="text-2xl font-bold text-blue-400 mb-3 text-center">3. Automate</h3>
                <p className="text-gray-300 text-center">Deploy strategies for automated execution</p>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 p-8 rounded-xl border border-blue-500/30 mt-12">
            <h3 className="text-2xl font-bold text-blue-300 mb-6 text-center">Integrated Workflow Example</h3>
            <pre className="bg-slate-950 p-6 rounded-lg overflow-x-auto">
              <code className="text-sm text-green-400">{`# Step 1: Research and backtest
research = ResearchEngine()
strategy = MeanReversionStrategy()
results = research.backtest(strategy, historical_data)

if results.sharpe_ratio > 2.0:
    # Step 2: Connect to live data
    connector = DataConnector(provider='live_broker')
    live_data = connector.stream(['AAPL', 'GOOGL'])
    
    # Step 3: Deploy for automation
    engine = AutomationEngine()
    engine.deploy(strategy, data_source=connector)
    engine.start()
    
    print("Strategy deployed successfully!")`}</code>
            </pre>
          </div>
        </div>
      ),
      background: 'from-slate-900 via-indigo-900/30 to-slate-900'
    },
    {
      id: 5,
      title: 'Get Started',
      subtitle: 'Begin Your Quantitative Trading Journey',
      content: (
        <div className="space-y-8 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-800/50 p-6 rounded-xl border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300">
              <h3 className="text-xl font-bold text-blue-400 mb-4">📦 Installation</h3>
              <pre className="bg-slate-950 p-3 rounded text-sm text-green-400 overflow-x-auto">
                <code>{`pip install qsautomate
pip install qsconnect
pip install qsresearch`}</code>
              </pre>
            </div>
            
            <div className="bg-slate-800/50 p-6 rounded-xl border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300">
              <h3 className="text-xl font-bold text-purple-400 mb-4">📚 Documentation</h3>
              <p className="text-gray-300 mb-3">Comprehensive guides and API references</p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Quick start tutorials</li>
                <li>• API documentation</li>
                <li>• Example strategies</li>
              </ul>
            </div>
            
            <div className="bg-slate-800/50 p-6 rounded-xl border border-green-500/30 hover:border-green-400/50 transition-all duration-300">
              <h3 className="text-xl font-bold text-green-400 mb-4">💡 Community</h3>
              <p className="text-gray-300 mb-3">Join the quantitative trading community</p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• GitHub discussions</li>
                <li>• Discord server</li>
                <li>• Example notebooks</li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-green-500/20 p-8 rounded-xl border border-blue-500/30 mt-8">
            <h3 className="text-2xl font-bold text-white mb-4 text-center">Why Choose This Toolkit?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="flex items-start space-x-3">
                <span className="text-2xl">⚡</span>
                <div>
                  <h4 className="font-bold text-blue-300">High Performance</h4>
                  <p className="text-gray-300 text-sm">Optimized for speed and efficiency</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-2xl">🔧</span>
                <div>
                  <h4 className="font-bold text-purple-300">Flexible & Extensible</h4>
                  <p className="text-gray-300 text-sm">Customize to your needs</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-2xl">🛡️</span>
                <div>
                  <h4 className="font-bold text-green-300">Production Ready</h4>
                  <p className="text-gray-300 text-sm">Battle-tested in live trading</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-2xl">🎯</span>
                <div>
                  <h4 className="font-bold text-yellow-300">Easy to Use</h4>
                  <p className="text-gray-300 text-sm">Intuitive API design</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 bg-clip-text text-transparent">
              Start Building Your Trading Edge Today
            </p>
          </div>
        </div>
      ),
      background: 'from-slate-900 via-slate-800 to-slate-900'
    }
  ];

  const nextSlide = () => {
    setDirection('forward');
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection('backward');
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentSlide ? 'forward' : 'backward');
    setCurrentSlide(index);
  };

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentSlide]);

  return (
    <div className={`min-h-screen bg-gradient-to-br ${slides[currentSlide].background} transition-all duration-1000`}>
      <div className="min-h-screen flex flex-col">
        {/* Header */}
        <header className="p-6 flex justify-between items-center bg-slate-900/50 backdrop-blur-sm border-b border-slate-700/50">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">QS</span>
            </div>
            <span className="text-white font-bold text-xl">Quant Science</span>
          </div>
          <div className="text-gray-400 text-sm">
            Use arrow keys or click to navigate
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 flex flex-col items-center justify-center p-8">
          <div className="w-full max-w-7xl">
            <div className="text-center mb-12">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 animate-fade-in">
                {slides[currentSlide].title}
              </h1>
              {slides[currentSlide].subtitle && (
                <p className="text-xl md:text-2xl text-gray-400 animate-fade-in">
                  {slides[currentSlide].subtitle}
                </p>
              )}
            </div>
            
            <div className="animate-fade-in">
              {slides[currentSlide].content}
            </div>
          </div>
        </main>

        {/* Footer Navigation */}
        <footer className="p-6 bg-slate-900/50 backdrop-blur-sm border-t border-slate-700/50">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <button
              onClick={prevSlide}
              className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={currentSlide === 0}
            >
              ← Previous
            </button>

            <div className="flex space-x-3">
              {slides.map((slide, index) => (
                <button
                  key={slide.id}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? 'bg-blue-500 w-8'
                      : 'bg-slate-600 hover:bg-slate-500'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={currentSlide === slides.length - 1}
            >
              Next →
            </button>
          </div>

          <div className="text-center mt-4 text-gray-500 text-sm">
            Slide {currentSlide + 1} of {slides.length}
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
