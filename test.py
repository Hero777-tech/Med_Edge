from node_manage import add_node, remove_node, get_nodes
import os
import time
import logging

KANISHKA_FOLDER = 'Kanishka'

logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')

def test_node_management():
    add_node('192.168.134.141')
    add_node('192.168.134.142')
    logging.info(f"Current nodes: {get_nodes()}")
    remove_node('192.168.134.142')
    logging.info(f"After removal: {get_nodes()}")

def create_test_file():
    test_file = os.path.join(KANISHKA_FOLDER, 'test_file.txt')
    with open(test_file, 'w') as f:
        f.write("This is a test file for synchronization.")
    logging.info(f"Created test file: {test_file}")
    return test_file

def modify_test_file(file_path):
    with open(file_path, 'a') as f:
        f.write("\nThis line was added to test modification synchronization.")
    logging.info(f"Modified test file: {file_path}")

def delete_test_file(file_path):
    os.remove(file_path)
    logging.info(f"Deleted test file: {file_path}")

if __name__ == "__main__":
    test_node_management()
    
    test_file = create_test_file()
    time.sleep(5)  # Wait for synchronization
    
    modify_test_file(test_file)
    time.sleep(5)  # Wait for synchronization
    
    delete_test_file(test_file)
    time.sleep(5)  # Wait for synchronization
    
    logging.info("Test completed. Check all nodes for synchronization results.")