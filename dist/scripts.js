const tabContents = {
  "tab-1": {
    title1: "Credit card and ACH payments",
    title2: "Retail Cash Payment",
    description1:
      "Get paid faster with online payments. With ePay, powered by Buildium, you can automate collections and payments to vendors, owners and residents.",
    description2:
      "We've partnered with PayNearMe to bring you an easy way to make, receive and process cash payments.",
    img: "images/screenshot-features-communications.png",
  },
  "tab-2": {
    title1: "Bookkeeping for any portfolio",
    title2: "Auto Bank Reconciliation",
    description1:
      "Keep your bookkeeping complete and accurate. Track every payment, manage accounts payable and reconcile bank accounts automatically.",
    description2:
      "Automatically compare your company’s banking records in Buildium against your “real world” bank statements to keep your books accurate.",
    img: "images/screenshot-features-accounting-desktop.png",
  },
  "tab-3": {
    title1: "Manage requests and work orders",
    title2: "",
    description1:
      "Residents, owners, or employees can submit work orders, and attach videos, documents, and images. Get status updates from your phone, tablet or desktop.",
    description2: "",
    img: "images/screenshot-features-maintenance-management.png",
  },
  "tab-4": {
    title1: "Pay Vendors Online",
    title2: "",
    description1:
      "Vendor bills and expenses can be tracked and paid within Buildium, so you’ll never need to enter data twice.",
    description2: "",
    img: "images/screenshot-features-vendor-management-desktop.png",
  },
  "tab-5": {
    title1: "Email and send letters in bulk",
    title2: "Texting and Announcement",
    description1:
      "Create one off emails or send emails in bulk right from Buildium and easily create and mail letters straight from Buildium with EZMail – you can even create and print mailing labels.",
    description2:
      "Communicate with vendors, owners, or residents instantly, 1 to 1 or in bulk through sms or Buildium’s announcements feature.",
    img: "images/screenshot-features-payment-collections.png",
  },
  "tab-6": {
    title1: "Payment",
    title2: "Requests",
    description1:
      "Residents can pay fees, rent or association fees, view their payment history and set up recurring payments.",
    description2:
      "Residents can submit maintenance requests with photos from their phone or tablet. They can see when an item has been assigned to a staff member or vendor, and view status updates.",
    img: "images/screenshot-features-resident-center.png",
  },
};
let tabs = document.getElementsByClassName("tabs");
let title_1 = document.getElementById("title-1");
let title_2 = document.getElementById("title-2");
let img = document.getElementById('img')
let description_1 = document.getElementById("description-1");
let description_2 = document.getElementById("description-2");
for (let tab of tabs) {
    tab.addEventListener('click', function(e){
        let tabId = e.target.getAttribute("id");
        let content = tabContents[tabId]; // get the content object based on tab element's id value
        title_1.innerHTML = content['title1'];
        title_2.innerHTML = content['title2'];
        description_1.innerHTML = content.description1;
        description_2.innerHTML = content.description2;
        img.src = content.img;
        tab.style.borderLeftColor = "#2C7873";;
        tab.style.color = "#2C7873";
    });
}