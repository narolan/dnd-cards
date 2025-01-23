import Button from 'react-bootstrap/Button';

const CustomButton = ({text, onClick, extraClasses, variant="flat", disabled=false}) => {
    return (
        <>
            <style type="text/css">
                {`
                    .btn-flat, 
                    .btn-primary {
                      background-color: #86211b;
                      border-color: #86211b;
                      color: white;
                      
                      &:hover,
                      &:focus {
                        background-color: #86211b;
                        border-color: #86211b;
                        color: white;
                      }
                    }
                    
                    .btn:disabled {
                      background-color: #86211b;
                      border-color: #86211b;
                      color: white;
                      
                      &:hover,
                      &:focus {
                        background-color: #86211b;
                        border-color: #86211b;
                        color: white;
                      }
                    }
                    
                    .btn-outline-primary,
                    .btn-outline-danger {
                      background-color: transparent;
                      color: #86211b;
                      border-color: #86211b;
                      
                      &:hover,
                      &:focus {
                          background-color: transparent;
                          color: #86211b;
                          border-color: #86211b;
                      }
                    }
                `}
            </style>

            <Button disabled={disabled} variant={variant} onClick={onClick} className={extraClasses}>
                {text}
            </Button>
        </>
    );
}

export default CustomButton;