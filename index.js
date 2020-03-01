
function array_concat_sum(array1, array2 = "") {
    var lista = []
    if (array2) {

        if (array1.length >= array2.length) {

            for (let u = 0; u < array1.length; u++) {
                if (Number.isNaN(parseInt(array1[u]))) {
                    array1[u] = 0;
                }
                if (Number.isNaN(parseInt(array2[u]))) {
                    array2[u] = 0;
                }
                lista[u] = array1[u] + array2[u];
            }
        } else {
            for (let u = 0; u < array2.length; u++) {
                for (let u = 0; u < array2.length; u++) {
                    if (Number.isNaN(parseInt(array1[u]))) {
                        array1[u] = 0;
                    }
                    if (Number.isNaN(parseInt(array2[u]))) {
                        array2[u] = 0;
                    }
                    lista[u] = array1[u] + array2[u];
                }
            }
        }
    } else {
        for (let array of array1) {
            //console.log(parseInt(1) + parseFloat(2.2))
        }
        return array1
    }
    return lista;
}
module.exports = array_concat_sum;