import Swal from 'sweetalert2';
import { useState } from 'react';

function ModalForOrder({ cartData, onClose }) {

    const [cartDataImage] = useState(cartData?.image);
    const [cartDataFlavor] = useState(cartData?.flavor);
    const [cartDataQuantity] = useState(cartData?.quantity);
    const [cartDataTotalPrice] = useState(cartData?.totalPrice);
    const [phoneNumber, setPhoneNumber]  = useState('');
    const [address, setAddress] = useState('');
    
    const modalSwal = Swal.fire({
        title: 'Order Details',
        showCancelButton: true,
        allowOutsideClick: false,
        html: `
            <div>
                <img src="${cartDataImage}" alt="Product Image" style="width: 100px; height: 100px;"/>
                <p>Flavor: ${cartDataFlavor}</p>
                <p>Quantity: ${cartDataQuantity}</p>
                <p>Total Price: $${cartDataTotalPrice}</p>
                <input type="text" id="phoneNumber" placeholder="Enter your phone number" class="swal2-input" value="${phoneNumber}">
                <input type="text" id="address" placeholder="Enter your address" class="swal2-input" value="${address}">
            </div>
        `,
        confirmButtonText: 'Confirm Order',
        cancelButtonText: 'Cancel',
        willClose: () => {
            onClose(); // Call the onClose function to close the modal
        },
        
        preConfirm: () => {
            const phone = Swal.getInput('phoneNumber').value;
            const addr = Swal.getInput('address').value;

            if (!phone || !addr) {
              Swal.showValidationMessage('Please enter both phone number and address');
              return false;
            }

            setPhoneNumber(phone);
            setAddress(addr);

            // Here you can handle the order confirmation logic, e.g., sending data to the server
            console.log('Order confirmed with:', {
                flavor: cartDataFlavor,
                quantity: cartDataQuantity,
                totalPrice: cartDataTotalPrice,
                phoneNumber: phone,
                address: addr
            });

            onClose(); // Close the modal after confirmation
        }
    })
    return(
        <>
        {modalSwal}
        </>
    )
}


export default ModalForOrder;