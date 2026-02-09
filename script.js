// --- Data: The "Database" of Designs ---
// In a real app, this would come from a JSON file or API.
const designs = [
    {
        id: 1,
        title: "Minimalist Japandi Bedroom",
        style: "Japandi",
        image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&w=800&auto=format&fit=crop", // Replace with your AI Image
        products: [
            { name: "Low Profile Platform Bed", price: "$249", img: "https://m.media-amazon.com/images/I/71+Example.jpg", link: "#" },
            { name: "Rice Paper Floor Lamp", price: "$45", img: "https://m.media-amazon.com/images/I/61+Example.jpg", link: "#" },
            { name: "Linen Duvet Set - Beige", price: "$89", img: "https://m.media-amazon.com/images/I/81+Example.jpg", link: "#" }
        ]
    },
    {
        id: 2,
        title: "Dark Academia Study",
        style: "Vintage",
        image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=800&auto=format&fit=crop",
        products: [
            { name: "Vintage Leather Desk Chair", price: "$120", img: "", link: "#" },
            { name: "Antique Brass Desk Lamp", price: "$35", img: "", link: "#" },
            { name: "Mahogany Writing Desk", price: "$199", img: "", link: "#" }
        ]
    },
    {
        id: 3,
        title: "Boho Chic Living Room",
        style: "Bohemian",
        image: "https://images.unsplash.com/photo-1522444195799-478538b28823?q=80&w=800&auto=format&fit=crop",
        products: [
            { name: "Rattan Lounge Chair", price: "$150", img: "", link: "#" },
            { name: "Macrame Wall Hanging", price: "$25", img: "", link: "#" },
            { name: "Jute Area Rug", price: "$60", img: "", link: "#" }
        ]
    },
    {
        id: 4,
        title: "Modern Gamer Setup",
        style: "Tech",
        image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?q=80&w=800&auto=format&fit=crop",
        products: [
            { name: "RGB Mechanical Keyboard", price: "$80", img: "", link: "#" },
            { name: "Ergonomic Mesh Chair", price: "$200", img: "", link: "#" },
            { name: "Ultrawide Monitor Arm", price: "$40", img: "", link: "#" }
        ]
    },
    {
        id: 5,
        title: "Scandi Coffee Corner",
        style: "Scandinavian",
        image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=800&auto=format&fit=crop",
        products: [
            { name: "Espresso Machine White", price: "$400", img: "", link: "#" },
            { name: "Floating Oak Shelves", price: "$30", img: "", link: "#" },
            { name: "Ceramic Mug Set", price: "$20", img: "", link: "#" }
        ]
    }
];

// --- Functions ---

// 1. Render the Grid
const gridContainer = document.getElementById('grid-container');

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
const productModal = new bootstrap.Modal(document.getElementById('productModal'));

function openModal(id) {
    const design = designs.find(d => d.id === id);
    if (!design) return;

    // Set Image & Text
    document.getElementById('modalImage').src = design.image;
    document.getElementById('modalTitle').textContent = design.title;
    document.getElementById('modalTag').textContent = design.style;

    // Generate Product List
    const productListContainer = document.getElementById('modalProducts');
    
    productListContainer.innerHTML = design.products.map(product => `
        <a href="${product.link}" target="_blank" class="product-card">
            <div class="product-img d-flex align-items-center justify-content-center text-muted">
                <i class="fa-solid fa-image"></i> </div>
            <div class="flex-grow-1">
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

// --- Initialize ---
document.addEventListener('DOMContentLoaded', () => {
    renderGrid();
});