
// الرمز الصحيح ورقم الهوية الصحيحين
const correctServiceCode = "GSL24082549077";
const correctIdNumber = "1128358874";

// حدث عند الضغط على استعلام
document.getElementById('sickLeaveForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // الحصول على المدخلات
    var serviceCode = document.getElementById('serviceCode').value;
    var idNumber = document.getElementById('idNumber').value;

    // التحقق من المدخلات
    if (serviceCode === correctServiceCode && idNumber === correctIdNumber) {
        document.getElementById('result').style.display = "block";
    } else {
        document.getElementById('result').style.display = "none";
        alert("البيانات المدخلة غير صحيحة. حاول مرة أخرى.");
    }
});

// وظيفة للرجوع إلى الصفحة السابقة
function goBack() {
    window.history.back();
}
