import React, { useState } from 'react';
import { ChevronDown, Store, Users, Zap } from 'lucide-react';

export default function WorkflowDiagram() {
  const [expandedStep, setExpandedStep] = useState(null);

  const shopkeeperSteps = [
    { id: 1, title: 'Register', description: 'Enter name, phone number, address' },
    { id: 2, title: 'Add Products', description: 'Input product name, description, price, quantity' },
    { id: 3, title: 'Manage Catalog', description: 'Edit prices, add or remove items anytime' },
    { id: 4, title: 'Generate Link', description: 'Unique link created for your store' },
    { id: 5, title: 'Share Catalog', description: 'Send link to consumers via WhatsApp' },
    { id: 6, title: 'Receive Cart', description: 'Consumer shares selected items' },
    { id: 7, title: 'Confirm Order', description: 'Check availability and prepare items' },
    { id: 8, title: 'Deliver', description: 'Hand over products to consumer' },
  ];

  const consumerSteps = [
    { id: 1, title: 'Register', description: 'Enter name, phone number, address' },
    { id: 2, title: 'Open Catalog', description: 'Access shopkeeper\'s product list via link' },
    { id: 3, title: 'Select Items', description: 'Use checkboxes, specify quantity' },
    { id: 4, title: 'Create Cart', description: 'Cart auto-generated with selections' },
    { id: 5, title: 'Share Cart', description: 'Send cart link to shopkeeper via WhatsApp' },
    { id: 6, title: 'Get Confirmation', description: 'Shopkeeper confirms your order' },
    { id: 7, title: 'Receive Delivery', description: 'Get your products' },
  ];

  const enhancements = [
    { icon: '💳', title: 'Payment Integration', desc: 'UPI / credit card support' },
    { icon: '📦', title: 'Inventory Management', desc: 'Auto-update stock levels' },
    { icon: '📊', title: 'Analytics Dashboard', desc: 'Sales reports for shopkeepers' },
  ];

  const StepCard = ({ step, flowType }) => (
    <div
      className="cursor-pointer transition-all duration-300"
      onClick={() =>
        setExpandedStep(expandedStep === ${flowType}-${step.id} ? null : ${flowType}-${step.id})
      }
    >
      <div
        className={`
          p-4 rounded-lg border-2 transition-all duration-300
          ${
            flowType === 'shopkeeper'
              ? 'border-orange-400 bg-orange-50 hover:bg-orange-100 hover:shadow-md'
              : 'border-blue-400 bg-blue-50 hover:bg-blue-100 hover:shadow-md'
          }
        `}
      >
        <div className="flex items-start justify-between">
          <div>
            <div className="text-sm font-bold text-gray-500 mb-1">Step {step.id}</div>
            <h4 className="font-bold text-gray-800">{step.title}</h4>
          </div>
          <ChevronDown
            size={20}
            className={`transition-transform ${
              expandedStep === ${flowType}-${step.id} ? 'rotate-180' : ''
            }`}
          />
        </div>
        {expandedStep === ${flowType}-${step.id} && (
          <p className="text-sm text-gray-600 mt-2 border-t border-gray-300 pt-2">
            {step.description}
          </p>
        )}
      </div>
      {step.id < (flowType === 'shopkeeper' ? 8 : 7) && (
        <div className="h-6 flex justify-center my-1">
          <div className="w-0.5 bg-gradient-to-b from-gray-400 to-transparent"></div>
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6 md:p-10">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Purniya Construction Materials</h1>
          <p className="text-lg text-gray-600">Workflow Overview</p>
        </div>

        {/* Main Flows */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Shopkeeper Flow */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-orange-400">
            <div className="flex items-center mb-6">
              <Store className="text-orange-500 mr-3" size={28} />
              <h2 className="text-2xl font-bold text-gray-800">Shopkeeper Flow</h2>
            </div>
            <div className="space-y-0">
              {shopkeeperSteps.map((step) => (
                <StepCard key={step.id} step={step} flowType="shopkeeper" />
              ))}
            </div>
          </div>

          {/* Consumer Flow */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-400">
            <div className="flex items-center mb-6">
              <Users className="text-blue-500 mr-3" size={28} />
              <h2 className="text-2xl font-bold text-gray-800">Consumer Flow</h2>
            </div>
            <div className="space-y-0">
              {consumerSteps.map((step) => (
                <StepCard key={step.id} step={step} flowType="consumer" />
              ))}
            </div>
          </div>
        </div>

        {/* Connection Highlight */}
        <div className="bg-gradient-to-r from-orange-50 to-blue-50 border-2 border-dashed border-gray-300 rounded-lg p-6 mb-12">
          <div className="flex items-start gap-4">
            <div className="text-2xl">🔗</div>
            <div>
              <h3 className="font-bold text-gray-800 mb-1">How They Connect</h3>
              <p className="text-gray-600 text-sm">
                Shopkeeper shares catalog link (Step 5) → Consumer opens it (Step 2) → Consumer
                creates cart (Steps 3-4) → Shares back with shopkeeper (Step 5) → Order
                confirmed and delivered!
              </p>
            </div>
          </div>
        </div>

        {/* Future Enhancements */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex items-center mb-8">
            <Zap className="text-yellow-500 mr-3" size={28} />
            <h2 className="text-2xl font-bold text-gray-800">Coming Soon</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {enhancements.map((item, idx) => (
              <div key={idx} className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Stats */}
        <div className="mt-12 text-center text-gray-600 text-sm">
          <p>Shopkeeper: 8 steps | Consumer: 7 steps | Connection: Bidirectional WhatsApp sharing</p>
        </div>
      </div>
    </div>
  );
}