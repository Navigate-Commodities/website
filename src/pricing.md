---
subscriptions:
  - title: Navigator
    description: 2 Week Free Trial
    price: 0
    features:
      - Access to the Navigator
      - Premium Insights
  - title: Navigator Plus
    price: 104
    features:
      - Access to the Navigator
      - 2 Channels of your choice
      - Premium Insights
  - title: Navigator Pro
    price: 146
    features:
      - Access to the Navigator
      - 3 Channels of your choice
      - Premium Insights
      - Data Download
  - title: Navigator Enterprise
    description: Request for Quotation
    price: -1
    features:
      - Access to the Navigator
      - 3 Channels of your choice
      - Premium Insights
      - Data Download
      - Market Consultation
      - Bespoke Dashboard(s)
      - Preferential Educator Rate
      - Multi-User License
---

# Flexible pricing that scales with the size of your business

Our customisable packages have been priced to support small and medium sized businesses in these uncertain times.

<PriceCardList>
  <PriceCard v-for="sub in $page.frontmatter.subscriptions" v-bind="sub" />
</PriceCardList>

## Simple, Secure and Online Payments

Annual subscriptions available in your local currency:
