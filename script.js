// --- Data: The "Database" of Designs ---
const designs = [
     {
        id: 1, 
        title: "Cozy Modern Desk Essentials",
        style: "Modern / Productivity",
        image: "images/pin-1/img.png", // Make sure this matches your file name!
        products: [
            // PASTE YOUR US AMAZON LINKS BELOW
            { name: "Industrial Dimmable Lamp (Set of 2)", price: "View on Amazon", img: "images/pin-1/lamp-thumb.jpg", link: "https://amzn.to/4qqDDmC" },
            { name: "40oz Tumbler with Handle (Beige)", price: "View on Amazon", img: "images/pin-1/thumbler.jpg", link: "https://amzn.to/4anllwq" },
            { name: "Decorative Faux Books (Set of 2)", price: "View on Amazon", img: "images/pin-1/faux-books.jpg", link: "https://amzn.to/4trebQs" },
            { name: "Concrete Desk Organizer Set", price: "View on Amazon",  img: "images/pin-1/organizer-set.jpg", link: "https://amzn.to/3ZmaA8K" }
        ]
    },
    // {
    //     id: 2,
    //     title: "Minimalist Japandi Bedroom",
    //     style: "Japandi",
    //     image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&w=800&auto=format&fit=crop",
    //     products: [
    //         { name: "Low Profile Platform Bed", price: "$249", img: "", link: "#" },
    //         { name: "Rice Paper Floor Lamp", price: "$45", img: "", link: "#" },
    //         { name: "Linen Duvet Set - Beige", price: "$89", img: "", link: "#" }
    //     ]
    // },
    // {
    //     id: 3,
    //     title: "Dark Academia Study",
    //     style: "Vintage",
    //     image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=800&auto=format&fit=crop",
    //     products: [
    //         { name: "Vintage Leather Desk Chair", price: "$120", img: "", link: "#" },
    //         { name: "Antique Brass Desk Lamp", price: "$35", img: "", link: "#" },
    //         { name: "Mahogany Writing Desk", price: "$199", img: "", link: "#" }
    //     ]
    // },
    // {
    //     id: 4,
    //     title: "Boho Chic Living Room",
    //     style: "Bohemian",
    //     image: "https://images.unsplash.com/photo-1522444195799-478538b28823?q=80&w=800&auto=format&fit=crop",
    //     products: [
    //         { name: "Rattan Lounge Chair", price: "$150", img: "", link: "#" },
    //         { name: "Macrame Wall Hanging", price: "$25", img: "", link: "#" },
    //         { name: "Jute Area Rug", price: "$60", img: "", link: "#" }
    //     ]
    // },
    // {
    //     id: 5,
    //     title: "Modern Gamer Setup",
    //     style: "Tech",
    //     image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?q=80&w=800&auto=format&fit=crop",
    //     products: [
    //         { name: "RGB Mechanical Keyboard", price: "$80", img: "", link: "#" },
    //         { name: "Ergonomic Mesh Chair", price: "$200", img: "", link: "#" },
    //         { name: "Ultrawide Monitor Arm", price: "$40", img: "", link: "#" }
    //     ]
    // },
    // {
    //     id: 5,
    //     title: "Scandi Coffee Corner",
    //     style: "Scandinavian",
    //     image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=800&auto=format&fit=crop",
    //     products: [
    //         { name: "Espresso Machine White", price: "$400", img: "", link: "#" },
    //         { name: "Floating Oak Shelves", price: "$30", img: "", link: "#" },
    //         { name: "Ceramic Mug Set", price: "$20", img: "", link: "#" }
    //     ]
    // },
    // {
    //     id: 5, 
    //     title: "Cozy Modern Desk Essentials",
    //     style: "Modern / Productivity",
    //     image: "images/pin-1.png", // Make sure this matches your file name!
    //     products: [
    //         // PASTE YOUR US AMAZON LINKS BELOW
    //         { name: "Industrial Dimmable Lamp (Set of 2)", price: "$39.99", link: "YOUR_US_AMAZON_LINK_HERE" },
    //         { name: "40oz Tumbler with Handle (Beige)", price: "$19.99", link: "YOUR_US_AMAZON_LINK_HERE" },
    //         { name: "Decorative Faux Books (Set of 2)", price: "$18.99", link: "YOUR_US_AMAZON_LINK_HERE" },
    //         { name: "Concrete Desk Organizer Set", price: "$24.99", link: "YOUR_US_AMAZON_LINK_HERE" }
    //     ]
    // }
];

// --- Variables ---
const gridContainer = document.getElementById('grid-container');
// We need to access the DOM element AND the Bootstrap instance
const productModalElement = document.getElementById('productModal');
const productModal = new bootstrap.Modal(productModalElement);

// --- Functions ---

// 1. Render the Grid
function renderGrid() {
    gridContainer.innerHTML = designs.map(design => `
        <div class="grid-item" onclick="openModal(${design.id})">
            <img src="${design.image}" alt="${design.title}" loading="lazy">
            <div class="grid-overlay">
                <div class="text-white">
                    <p class="mb-0 small text-uppercase opacity-75">${design.style}</p>
                    <h5 class="fw-bold mb-0">${design.title}</h5>
                </div>
            </div>
        </div>
    `).join('');
}

// 2. Open Modal & Populate Data
function openModal(id) {
    const design = designs.find(d => d.id === id);
    if (!design) return;

    // --- NEW: Update URL for Deep Linking ---
    // This adds "?id=6" to your browser URL bar without reloading the page
    const newUrl = window.location.protocol + "//" + window.location.host + window.location.pathname + '?id=' + id;
    window.history.pushState({path: newUrl}, '', newUrl);

    // Set Image & Text
    document.getElementById('modalImage').src = design.image;
    document.getElementById('modalTitle').textContent = design.title;
    document.getElementById('modalTag').textContent = design.style;

    // Generate Product List
    const productListContainer = document.getElementById('modalProducts');
    
    productListContainer.innerHTML = design.products.map(product => `
        <a href="${product.link}" target="_blank" class="product-card text-decoration-none">
            <div class="product-img d-flex align-items-center justify-content-center text-muted overflow-hidden">
                ${product.img 
                    ? `<img src="${product.img}" alt="${product.name}" class="w-100 h-100 object-fit-contain">` 
                    : `<i class="fa-solid fa-image"></i>`
                } 
            </div>
            
            <div class="flex-grow-1 ps-3">
                <h6 class="mb-0 fw-semibold text-dark">${product.name}</h6>
                <small class="text-success fw-bold">${product.price}</small>
            </div>
            
            <div class="text-primary">
                <i class="fa-solid fa-arrow-up-right-from-square"></i>
            </div>
        </a>
    `).join('');

    productModal.show();
}

// --- Event Listeners ---

// 1. Clean URL when Modal Closes
// When user closes the popup, remove "?id=6" so the URL goes back to normal
productModalElement.addEventListener('hidden.bs.modal', () => {
    const cleanUrl = window.location.protocol + "//" + window.location.host + window.location.pathname;
    window.history.pushState({path: cleanUrl}, '', cleanUrl);
});

// 2. Initialize & Check Router
document.addEventListener('DOMContentLoaded', () => {
    renderGrid();

    // Check if the URL has an ID (e.g., website.com/?id=6)
    const urlParams = new URLSearchParams(window.location.search);
    const designId = parseInt(urlParams.get('id'));

    // If there is an ID, open that modal automatically
    if (designId) {
        openModal(designId);
    }
});




