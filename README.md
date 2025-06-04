# Free 🧾 Invoice 🧾 Generator

This project provides a user-friendly invoice generation tool for freelancers, small businesses, and contractors. Create professional, customized invoices quickly and easily to ensure you get paid on time, every time.

## ⑂ Fork Info
This is a fork of https://github.com/pranavp10/invoice-generator.
I was looking for an app to generate good-looking invoices and found above-mentioned app, which did *almost* what I wanted.

The list of changes in this version:
* Upgraded most of the dependencies to fresh versions.
* Added Intermediate Bank field.
* Made Swift Code optional.
* Removed IFSC Code and replaced Routing Code with Routing Info as universal solution to various national EFT systems.
* Removed invoice item counts. This can be added to item description, but we get precious horizontal space.
* Removed currency icons and make "payable in" just another line at the bottom. This looks way more professional and saves space.
* Removed from/to pictures for the same reasons.
* Made subtotal show only when modifiers are applied. This saves vertical space in most cases.
* Made company information look the same both left and right even if some data is missing.
* Removed hand-crafted preview components and replaced with native preview from react-pdf library.
* Improved application display for mobile screen.

## 🌐 Live Version
[Live Invoice Generator Link](https://invoice-generator.vercel.app/)

## 📌 Key Features

- **Free & Open Source:** Absolutely no cost, with the freedom to customize and adapt to your specific needs.
- **Fast & Efficient:** Generate beautiful invoices in seconds by simply filling in the blanks.
- **Unlimited Invoices:** Create as many invoices as you require, forever, at no charge.
- **Save Time & Resources:** Eliminate the need for manual invoice creation with spreadsheets and expensive software.

### 🩼️ Running Locally

Create `.env.local` file similar to `.env.example`.

This project uses yarn
```bash
git clone https://github.com/.../invoice-generator.git
cd invoice-generator
yarn install
yarn run dev
```

### ℹ️ Support

- **Bug Reports:** To report bugs, create an issue on the project's GitHub repository.
- **Feature Requests:** Feel free to suggest new features by creating an issue on GitHub.
